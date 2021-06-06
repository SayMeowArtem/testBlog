import React, { useState } from 'react'
import { useForm, SubmitHandler} from "react-hook-form";
import { TextField , Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { addPostActionCreator } from '../../actions';
import { IState } from '../../App';


interface IFormInput {
    title: string;
    author: string;
    content: string;
    urlToImage: string
}

export interface IReduceProps {
    dispatch: (action: any) => void,
    state: IState
}

  const useStyles = makeStyles({
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        marginTop: '25px'
    },
    input: {
        marginBottom: '25px',
        width: '500px'
    }
  });
  

const AddPostPage: React.FC<IReduceProps> = ({dispatch, state}: IReduceProps) => {
   
    const classes = useStyles();
    const { register, handleSubmit, reset} = useForm<IFormInput>();
    const [alert, setalert] = useState(false);

    const onSubmit: SubmitHandler<IFormInput> = (data): void => {
        dispatch(addPostActionCreator(data))
        reset();
        setalert(true);
        setTimeout(() => {
            setalert(false)
        }, 2000)
    }

    return (
    <form className={classes.form}  onSubmit={handleSubmit(onSubmit)}>
      <TextField label="title"  className={classes.input} {...register("title", { required: true, maxLength: 30 })} />
      <TextField label="content"  multiline className={classes.input} {...register("content", { required: true})} />
      <TextField label="author"  className={classes.input} {...register("author", { required: false, maxLength: 30})} /> 
      <TextField label="urlToImage" className={classes.input} {...register("urlToImage", { required: true})} /> 
      <Button  className={classes.button} type="submit" variant="contained" color="primary">Добавить запись</Button>
      { alert && <div>Запись добавлена!</div>}
    </form>
    )
}

export default AddPostPage
