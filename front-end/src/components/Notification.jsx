import { FaTimes } from 'react-icons/fa';
const Notification = ({ notification }) => {
  return (
    <div className="grids-cols-1 mt-6 flex grid items-center justify-center">
      <div className="rounded-2xl bg-white p-3 drop-shadow-xl hover:bg-white/75">
        <h1>
          <div className="flex gap-8">
            {notification.title}
            <button className="hover:cursor-pointer">
              <FaTimes />
            </button>
          </div>
        </h1>
        <p>{notification.date}</p>
      </div>
    </div>
  );
};

export default Notification;
