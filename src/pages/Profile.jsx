import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUpload, FiEdit } from "react-icons/fi";
import EditProfileModal from "../components/profile/EditProfileModal";
import ContentCard from "../components/content/ContentCard";

const UserProfile = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("top-content");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [content, setContent] = useState([
        { id: 1, title: "Top Video #1", description: "High-performance cinematography techniques.", archived: false },
        { id: 2, title: "Top Video #2", description: "Behind the scenes of a viral video shoot.", archived: false },
        { id: 3, title: "Video #3", description: "How to master slow-motion shots.", archived: false },
        { id: 4, title: "Video #4", description: "A deep dive into storytelling in films.", archived: false }
    ]);

    const archiveContent = (id) => {
        setContent(prev =>
            prev.map(item =>
                item.id === id ? { ...item, archived: true } : item
            )
        );
    };

    const restoreContent = (id) => {
        setContent(prev =>
            prev.map(item =>
                item.id === id ? { ...item, archived: false } : item
            )
        );
    };

    const deleteContent = (id) => {
        setContent(prev => prev.filter(item => item.id !== id));
    };

    return (
        <div className="w-full h-screen flex items-center justify-center bg-[#0D1117] text-white">
            <div className="w-full h-full max-w-6xl bg-[#161B22] shadow-lg flex flex-col overflow-hidden relative">
                
                {/* Profile Header */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-8 flex flex-col md:flex-row items-center">
                    <img src="https://via.placeholder.com/100" alt="User Avatar" className="w-24 h-24 rounded-full border-4 border-white" />
                    <div className="ml-6 text-center md:text-left">
                        <h2 className="text-2xl font-semibold">John Doe</h2>
                        <p className="text-sm opacity-80">@johndoe</p>
                        <p className="mt-1 text-sm">john@example.com</p>
                        <p className="mt-1 text-sm bg-white text-indigo-600 px-3 py-1 rounded-full inline-block">Videographer</p>
                    </div>
                    <div className="ml-auto mt-4 md:mt-0">
                        <button onClick={() => setIsModalOpen(true)} className="btn btn-md btn-outline text-white rounded-full hover:opacity-90 transition-all">
                            <FiEdit className="text-lg" /> Edit Profile
                        </button>
                    </div>
                </div>

                {/* Tabs */}
                <div className="border-b border-gray-600 flex">
                    {["top-content", "all-content", "archived"].map(tab => (
                        <button
                            key={tab}
                            className={`w-1/3 text-center py-3 text-lg font-medium transition-all duration-300 ${activeTab === tab ? "border-b border-indigo-500 text-white" : "text-gray-400"}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab === "top-content" ? "Top Content" : tab === "all-content" ? "All Content" : "Archived"}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="flex-grow overflow-auto p-6 pb-20">
                    {["top-content", "all-content"].includes(activeTab) && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {content.filter(item => !item.archived).map(item => (
                                <ContentCard key={item.id} {...item} archiveContent={archiveContent} deleteContent={deleteContent} />
                            ))}
                        </div>
                    )}

                    {activeTab === "archived" && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {content.filter(item => item.archived).map(item => (
                                <ContentCard key={item.id} {...item} restoreContent={restoreContent} deleteContent={deleteContent} isArchived />
                            ))}
                        </div>
                    )}
                </div>

                {/* Floating Upload Button */}
                <button 
                    onClick={() => navigate("/upload")}
                    className="btn btn-md bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:opacity-90 transition-all px-4 py-2 fixed bottom-6 right-6 shadow-lg shadow-blue-500/50 hover:scale-105"
                >
                    <FiUpload className="text-lg" /> Upload
                </button>

                {/* Edit Profile Modal */}
                {isModalOpen && <EditProfileModal closeModal={() => setIsModalOpen(false)} />}
            </div>
        </div>
    );
};

export default UserProfile;
