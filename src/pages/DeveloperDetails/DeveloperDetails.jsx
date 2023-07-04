import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserById } from '../../services/API_proyect/user.service';
import { useTheme, Divider, Avatar, Grid, Paper, TextField, Button } from '@mui/material';
import {
  createComment,
  getByReference,
} from '../../services/API_proyect/comment.service';
import Comments from '../../components/Comments/Comments';
import './DeveloperDetails.css';
import WriteRatingForDeveloper from '../../components/ratings/WriteRatingForDeveloper/WriteRatingForDeveloper';
import { createMasChat } from '../../services/API_proyect/chat.service';
import { useAuth } from '../../contexts/authContext';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';
import DeleteCommentComponent from '../../components/DeleteComment/DeleteComment';

const DeveloperDetails = () => {
  const { user } = useAuth();
  const theme = useTheme();
  const { state } = useLocation();
  const [res, setRes] = useState({});
  const [resComment, setResComment] = useState({});
  const [resNewChat, setResNewChat] = useState({});
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState(null);
  const [developer, setDeveloper] = useState(null);
  const [comments, setComments] = useState(null);
  const { id } = state;

  const getData = async () => {
    setLoading(true);
    setRes(await getUserById(id));
    setLoading(false);
  };

  const handleComment = async () => {
    const customFormData = {
      commentContent: inputValue,
      commentType: 'Publico',
      referenceUser: id,
    };
    setLoading(true);
    setResComment(await createComment(customFormData));
    setLoading(false);
  };

  const handleCommentPrivate = async () => {
    const customFormData = {
      commentContent: inputValue,
      commentType: 'Privado',
      referenceUser: id,
    };

    console.log(customFormData);
    setLoading(true);
    setResNewChat(await createMasChat(customFormData));
    setLoading(false);
  };

  const getComment = async () => {
    const dataComments = await getByReference('User', id);

    const filterData = dataComments.data.filter(
      (singleCommets) => singleCommets.commentType == 'Publico',
    );
    setComments(await filterData);
  };

  useEffect(() => {
    if (resNewChat?.status == 200) {
      console.log(resNewChat);
      setShow(!show);
      Swal.fire({
        icon: 'success',
        title: '¡Mensaje enviado!',
        showConfirmButton: false,
        timer: 1500,
      });
      setResNewChat({});
    }
  }, [resNewChat]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (res.status == 200) {
      setDeveloper(res.data);
    }
  }, [res]);

  useEffect(() => {
    if (developer != null) {
      getComment();
    }
  }, [developer]);

  useEffect(() => {
    console.log(res);
    if (res.status == 200) {
      getComment();
    }
  }, [resComment]);

  return (
    <div className="DeveloperDetails-container">
      <div className="DeveloperDetails-container-one">
        <div className="DeveloperDetails-header">
          <h2>¡Hola, soy {developer?.name}!</h2>
          <p>Java Developer</p>
        </div>
        {developer && <WriteRatingForDeveloper userToRate={developer} />}
        <div className="DeveloperDetails-body">
          <div className="DeveloperDetails-img">
            <img className="dev-img" src={developer?.image} alt="developer-img"></img>
          </div>

          <div className="DeveloperDetails-about">
            <h3>Acerca de mi:</h3>
            <p>
              - Nombre: {developer?.name} {developer?.surname}
            </p>
            <p>- Localización: {developer?.city}</p>
            <p>
              - Technologies: <br></br>
              {developer?.technologies}
            </p>
          </div>

          <div className="DeveloperDetails-description">
            <h3>Descripción:</h3>
            <p>{developer?.description}</p>
          </div>
        </div>

        <div
          style={{ padding: 14 }}
          className="DeveloperDetails-description-container-App"
        >
          <button className="private-comment-btn" onClick={() => setShow(!show)}>
            Enviar mensaje
          </button>
          {show ? (
            <div className="container-privateMessage">
              <Paper style={{ padding: '40px 20px', backgroundColor: '#fcfcfc' }}>
                <h3>Envia tu mensaje privado!</h3>
                <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>
                    <Avatar alt="Remy Sharp" src={user?.image} />
                  </Grid>
                  <Grid justifyContent="left" item xs zeroMinWidth>
                    <TextField
                      id="newComent"
                      label="Pon tu comentario"
                      variant="outlined"
                      style={{ width: '100%' }}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        border: 'none',
                        borderRadius: '30px',
                        height: '39px',
                        width: '270px',
                        [theme.breakpoints.down('sm')]: {
                          width: '120px',
                        },
                        backgroundColor: '#25d366',
                        color: 'white',
                        fontSize: '16px',
                        transition: 'linear .2s',
                        marginTop: '30px',
                        ':hover': {
                          borderBottom: '1.5px solid #25d366',
                          backgroundColor: 'rgb(250, 250, 250)',
                          color: '#25d366',
                          fontSize: '18px',
                          cursor: 'pointer',
                        },
                      }}
                      onClick={() => handleCommentPrivate()}
                      disabled={loading}
                    >
                      Enviar
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          ) : null}
          <Paper style={{ padding: '40px 20px' }}>
            <h3>Comments</h3>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar alt="Remy Sharp" src={user?.image} />
              </Grid>
              <Grid justifyContent="left" item xs zeroMinWidth>
                <TextField
                  id="newComent"
                  label="Pon tu comentario"
                  variant="outlined"
                  style={{ width: '100%' }}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ margin: 1 }}
                  onClick={() => handleComment()}
                  disabled={loading}
                >
                  Enviar
                </Button>
              </Grid>
            </Grid>

            <Divider variant="fullWidth" style={{ margin: '30px 0' }} />
            <div
              className="Dev-comments"
              style={{ maxHeight: '400px', overflowY: 'auto' }}
            >
              {comments != null ? 
                comments.map((singleComment) => (
                  <div key={singleComment?._id}>
                    <Comments comment={singleComment} setComentsByChild={setComments} />
                    <DeleteCommentComponent commentId={singleComment?._id} />
                  </div>
                )) : null}
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default DeveloperDetails;
