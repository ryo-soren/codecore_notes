import QuestionDetails from "./QuestionDetails";
// import AnswerDetails from './AnswerDetails';
import AnswerList from "./AnswerList";
import { useState, useEffect } from "react";
// import questionData from '../questionData';
import { Question } from "../requests";
import { useParams } from "react-router-dom";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

const QuestionShowPage = (props) => {
  const [question, setQuestion] = useState({});

  useEffect(() => {
    Question.show(props.match.params.id).then((fetchedAPIQuestion) => {
      setQuestion(fetchedAPIQuestion);
    });
  }, []);

  const deleteAnswer = (id) => {
    const {answers, ...rest} = question
    setQuestion({
        answers: answers.filter(a => a.id !== id),
        ...rest
    })
    
  }

  const { title, body, author_full_name, view_count, created_at, updated_at} = question

  return (
    <main>
      <QuestionDetails
        title={title}
        body={body}
        author={author_full_name}
        view_count={view_count}
        created_at={created_at}
        updated_at={updated_at}
      />
      {/* <button
        onClick={() => {
          this.delete();
        }}
      >
        Delete this Question
      </button> */}
      <AnswerList
        answers={question.answers}
        deleteAnswer={(id) => deleteAnswer(id)}
      />
    </main>
  );
};
// class QuestionShowPage extends Component {
//     //two ways to declare state
//     //1
//     constructor(props){
//         super(props);
//         this.state = {
//             question: {}
//         }
//         // this.delete = this.delete.bind(this)
//     }

//     //2
//     // state = {
//     //     question: questionData
//     // }

//     componentDidMount(){
//         // Question.show(483) //just hard coded for now
//         console.log(this.props.match.params.id)
//         Question.show(this.props.match.params.id) //no more hard coding - display the first id that matches. We have access to the params and the match methos through our router
//         .then((fetchedAPIquestion) => {
//             this.setState(() => {
//                 return{
//                     question: fetchedAPIquestion
//                 }
//             })
//         })
//     }

//     delete(){
//         this.setState({
//             question: null
//         })
//     }

//     deleteAnswer(id){
//         this.setState({
//             question: {
//                 ...this.state.question,
//                 answers: this.state.question.answers.filter(a => a.id != id)
//             }
//         })
//     }

//     render(){
//         return(
//           <main>
//             <QuestionDetails
//             title={this.state.question.title}
//             body={this.state.question.body}
//             author={this.state.question.author_full_name}
//             view_count={this.state.question.view_count}
//             created_at={this.state.question.created_at}
//             updated_at={this.state.question.updated_at}
//             />
//             <button onClick={()=>{this.delete()}}>Delete this Question</button>
//             <AnswerList
//             answers={
//                 this.state.question.answers
//             }
//             deleteAnswer={(id) => this.deleteAnswer(id)}
//             />
//           </main>
//         )
//     }

// }

export default withRouter(QuestionShowPage);

