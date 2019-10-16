autowatch = 1;

function led(x, y, brightness) {
		this.xa = x;
		this.ya = y;
		this.brightnessa = brightness;
		this.cont = 0;
		
		this.lin = function() {
			this.xa = (this.xa + 1) % 15;
		}
		
		this.sin = function() {
			this.cont += 1;
			this.xa = Math.sin(this.cont)
		}
		
}

var row1 = new led(0,0, 15);


function count_one () {

	row1.sin();
	outlet(0, row1.xa, row1.ya, row1.brightnessa);

}