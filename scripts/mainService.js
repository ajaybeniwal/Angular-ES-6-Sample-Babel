export default function($http){
	return {
		getuser(){
			return $http.get('https://itunes.apple.com/us/rss/toppaidapplications/limit=100/json')
		}
	}
}