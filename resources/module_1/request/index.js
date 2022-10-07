var X_Experiment_A = 'index.html';
var X_Experiment_B = 'index_b.html';

function handler(event) {
    var request = event.request;
    if (Math.random() < 0.8) {
        request.uri = '/' + X_Experiment_A;
    } else {
        request.uri = '/' + X_Experiment_B;
    }
    console.log('X_Experiment_V ' + (request.uri == '/index.html' ? 'A_VERSION' : 'B_VERSION'));

    return request;
}
