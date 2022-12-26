const CardHome: React.FC = ({ nameCamera, imageUrl }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <img className="w-60 h-60" src={imageUrl} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">{nameCamera}</div>
      </div>
    </div>
  );
};

export default CardHome;
