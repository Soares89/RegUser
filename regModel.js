var mongoose = require('mongoose');

//schema
var regSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telef: {
        type: String,
        required: true
    },
    morada: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

// Export Reg Model
var Reg = module.exports = mongoose.model('reg', regSchema);

module.exports.get = function (callback, limit) {
   Reg.find(callback).limit(limit); 
}