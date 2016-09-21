/**
* @Author: Rafael Bribiesca <rafabripi>
* @Date:   2016-08-15T20:02:38-05:00
* @Email:  rafaelbripi@gmail.com
* @Project: myIdentity
* @Last modified by:   Rafael Bribiesca
* @Last modified time: 2016-09-20T22:27:31-05:00
*/

import calidateJS from 'validate.js';

const constraints = {

	userName: {
		presence: {
			message: " is required"
		},
		length: {
			minimum:5,
			maximum:55
		}
	},

	nickName: {
		presence: true,
		length: {
			minimum: 4,
			maximum: 15,
			message: "Nick name should be bethween 4 and 15 caracters"
		}
	},

	dateBirth: {
		presence: {
			message: " is required"
		}
	},

	address: {
    length: {
			minimum: 5,
			maximum: 45
		}
  },

	email: {
		presence: {
			message: " is required"
		},
		email: true,
	},

	billingName: {
		presence: {
			message: " is required"
		}
	}
}
 export default constraints;
