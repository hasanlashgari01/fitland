const Avatar = ({ size = 8, image, defaultAvatar, name }) => {
  return (
    <div className={`overflow-hidden rounded-full size-${size}`}>
      <img
        src={
          image ? `http://localhost:3000/public/images/${image}` : defaultAvatar ? defaultAvatar : "/public/avatar.png"
        }
        alt={name}
        className="size-full object-cover"
      />
    </div>
  );
};

export default Avatar;
