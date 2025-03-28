const EditProfileModal = ({ user, setUser, closeModal }) => {
    const handleUpdateProfile = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        setUser({
            name: formData.get("name"),
            username: formData.get("username"),
            email: formData.get("email"),
            role: formData.get("role"),
        });
        closeModal();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-[#161B22] p-6 rounded-lg w-96">
                <h2 className="text-lg font-semibold mb-4">Edit Profile</h2>
                <form onSubmit={handleUpdateProfile}>
                    <input name="name" defaultValue={user.name} className="input input-bordered w-full rounded-full mb-3 px-4 py-2" placeholder="Full Name" required />
                    <input name="username" defaultValue={user.username} className="input input-bordered w-full rounded-full mb-3 px-4 py-2" placeholder="Username" required />
                    <input name="email" type="email" defaultValue={user.email} className="input input-bordered w-full rounded-full mb-3 px-4 py-2" placeholder="Email" required />
                    <input name="role" defaultValue={user.role} className="input input-bordered w-full rounded-full mb-3 px-4 py-2" placeholder="Role" required />
                    <div className="flex justify-end mt-4">
                        <button type="button" onClick={closeModal} className="btn bg-gray-700 text-white rounded-full px-4 py-2">
                            Cancel
                        </button>
                        <button type="submit" className="btn btn-md bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:opacity-90 transition-all px-4 py-2 ml-2">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfileModal;
