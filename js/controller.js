
function randd(min, max) {
  return Math.floor(arguments.length > 1 ? (max - min + 1) * Math.random() + min : (min + 1) * Math.random());
};

function guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}


var app = new Vue({
	el: '#app',
	data: {
		sURL: "",
		sResult: ""
	},

	computed: {
		// bShowGetAcces: function(){
			// return !(this.sToken && this.sUser);
		// }
	},
	mounted: function() {
		//this.recognise();
	
	},
	methods: {
		recognise: function(){
			let that = this;
			Tesseract.recognize(
				that.sURL,
				'rus',
				{ logger: m => console.log(m) }
			).then(({ data: { text } }) => {
				that.sResult = text;
			})
		}
	}
});
