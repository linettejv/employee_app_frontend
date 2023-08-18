import './deletepopup.css';
import { useDeleteEmployeeMutation } from '../../Pages/Employee/Employee/api';

function DeletePopup(props) {
  const [deleteEmployee] = useDeleteEmployeeMutation();

  const handleDelete = () => {
    console.log('dispatched');
    deleteEmployee(props.deleteId.current);

    return props.onDeleteClick(false);
  };

  return (
    <div className='overlay'>
      <div className='modal'>
        <img
          className='close'
          onClick={() => props.onDeleteClick(false)}
          src='/assets/img/close.png'
          data-testid='popup-img-test'
        ></img>
        <h6>Are you sure ?</h6>
        <p>The Employee Details will be removed from the database</p>
        <div className='button-class'>
          <button
            data-testid='popup-button-test'
            className='button1'
            onClick={() => {
              handleDelete();
            }}
          >
            Confirm
          </button>
          <button className='button2' onClick={() => props.onDeleteClick(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
export default DeletePopup;
