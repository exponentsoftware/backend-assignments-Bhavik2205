import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    status: {
        type: String
    },
    category: {
        type: String
    }
},
{
    timestamps: true
}
);

const todoModel = mongoose.model("todoModel", todoSchema);
export default todoModel;