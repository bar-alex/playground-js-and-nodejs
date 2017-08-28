module.exports = function(express, app){
	var router = express.Router();

	router.get('/', function(req, res, next){
		res.render('index', {title: 'Wellcome to ChatCAT'});
	});

	router.get('/chatrooms', function(req, res, bext){
		res.render('chatrooms', {title: 'You\'re in Chatrooms'});
	});

	router.route('/funky').get(function(req, res, next){
		res.send('<h1>This is a funky test :D!</h1>');
	});

	app.use('/', router);
}