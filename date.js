exports.getDate = function () {
    const today = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    };

    return today.toLocaleDateString("us-US", options);
};

exports.getDay = function () {
    const today = new Date();
    const options = {
        weekday: 'long',
    };

    return today.toLocaleDateString("us-US", options);
}
