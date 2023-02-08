import { comments as data } from "../data/comments";

//private
let comments = [...data];

function getCommentById(id) {
  //get comment by id
  return comments.find((comment) => comment.id === id);
}

function getCommentsByPostId(postId) {
  //get comments by post id
  return comments.find((comment) => comment.postId === postId);

}

function updateCommentBody(id, body) {
  //update comment body
  comments = comments.map((comment) => {
    if(comment.id === id){
      return{
        ...comment,
        ...body,
      };
    }
    return comment;
  });

}

function deleteCommentById(id) {
  //delete comment by id
  return comments.filter((comment) => comment.id != id)
  
}

function addComment(comment) {
  return comments.push(comment)
  //add comment to comments array
  // use generateId function and pass comments array as the argument to generate a unique id.
}

function generateId(comments){
  comments.forEach(comment => {
    comment.id  = i+1;
    
  });
}