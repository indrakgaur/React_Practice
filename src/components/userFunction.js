const UserFunction = (props) => {
  return (
    <div className='user-Card'>
      <ul>
        <li>Name : John</li>
        <li>Contact : 975726239</li>
        <li>Email : johndoe@gmail.com</li>
        <li>{props.city}</li>
      </ul>
    </div>
  );
};

export default UserFunction;
