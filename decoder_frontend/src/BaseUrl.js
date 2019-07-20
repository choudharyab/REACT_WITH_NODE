
const url = 'http://localhost:3001/api/';
const baseurl={

		/*********************Login url**************************************************/
		login:url+'users/login',
		register:url+'users/register',

		/************************Thread url**************************************************************/
		create:url+'thread/create',
		getAll:url+'thread/get_thread',
		

		
};

export default baseurl;