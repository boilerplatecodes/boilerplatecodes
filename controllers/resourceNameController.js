const ResourceName = require("../model/resourceNameModel");

// Middleware handler.
exports.checkParam = (req, res, next, val) => {
    console.log("Performing checks on param with val " + val);
    const notValid = false;
    // const notValid = true;
    if(notValid){
        return res.status(400).json({
            status: "fail",
            message: "Invalid param"
        })
    }
    next();
}

// Routes handler
exports.getAllResources = (req, res) => {
    const resources = [];
    res.status(200).json({
        status: "success", /* success | fail */
        results: resources.length,
        data: {
            resources
        },
    })
}


exports.getResource = (req, res) => {
    console.log("Getting resource with id " + req.params.id)
    const resource = {};

    res.status(200).json({
        status: "success",
        data: {
            resource
        }
    })


};
exports.createResource = async (req, res) => {
    console.log(req.body);
    const resourceName = new ResourceName({
        id: req.body.id
    });
    try {
        await resourceName.save();
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            status: "fail",
            message: error.message
        })
    }
   
    res.status(201).json({
        status: "success",
        data: {
            resource: resourceName
        }
    })
};

exports.updateResource = (req, res) => {
    console.log("Updating resource with id " + req.params.id);
    const updatedResource = {};
    res.status(200).json({
        status: "success",
        data: {
            resource: updatedResource
        }
    })
};


exports.deleteResource = (req, res) => {
    console.log("Deleting resource with id " + req.params.id);
    res.status(204).json({
        status: "success",
        data: null
    })

};
