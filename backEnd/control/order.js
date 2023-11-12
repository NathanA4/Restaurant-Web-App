const OrderSchema = require("../models/ordermodel")

exports.addOrder = async (req, res) => {
    const {title, number} = req.body;

    const order = OrderSchema({title, number});
    try {
        if(!title || !number){
            return res.status(400).json({Error: "Must Enter all the fields!"});
        }
        await order.save();
        res.status(200).json({message: "Order has been Added!"});
        
    } catch (error) {
        res.status(500).json({message: "Server Error"});
    }
}

exports.getOrder = async (req, res) => {
    try {
        const orders = await OrderSchema.find().sort({CreatedAt: -1});
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({Error: "Server Error"});
    }
}
exports.deleteOrder = async (req, res) =>{
    const{id} = req.params;
    OrderSchema.findByIdAndDelete(id)
    .then((order) => {
        res.status(200).json({message: 'Order has been Deleted'})
    })
    .catch((err) =>{
        res.status(500).json({message: 'Server Error'})
    })
}