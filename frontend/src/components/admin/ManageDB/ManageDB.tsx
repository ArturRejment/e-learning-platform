import './ManageDB.scss';

const ManageDB = () => {
  return (
    <div className="main">
      <form className="main_form">
        <label>Enter SQL query for your DB</label>
        <input type="text" placeholder="enter SQL query"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ManageDB;
