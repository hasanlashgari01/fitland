const Image = ({ cover }) => {
  return <img src={`http://localhost:3000/public/images/${cover}`} alt={name} className="size-full object-cover" />;
};

export default Image;
