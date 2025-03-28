const ContentCard = ({ title, description }) => {
    return (
        <div className="bg-[#21262D] shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <img src="https://via.placeholder.com/300x200" className="w-full h-40 object-cover opacity-90" />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-indigo-400">{title}</h3>
                <p className="text-gray-400 text-sm mt-1">{description}</p>
            </div>
        </div>
    );
};

export default ContentCard;
