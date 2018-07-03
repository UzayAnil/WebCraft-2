const blocks = Array(255); {
    new Block(1, "stone");
}

function Block(id, name) {
    this.id = id;
    this.name = name;

    assert(id !== 0, "Block cannot have the ID 0!");
    assert(!blocks[id], "A block with ID " + id + " is already registered!");
    blocks[id] = this;
}

Block.prototype.isAir = function() {
    return this.id === 0;
};

Block.prototype.isOpaque = function() {
    return !this.isAir() && !this.transparent;
};

Block.prototype.isFaceCulled = function(x, y, z, world, face) {
    var cx = x + face.direction[0];
    var cy = y + face.direction[1];
    var cz = z + face.direction[2];
    var cb = world.getBlock(cx, cy, cz);
    return cb && cb.isOpaque();
};

Block.prototype.getWaveAmount = function(u, v) {
    return 0; // for now
};

Block.prototype.render = function(vertices, world, x, y, z) {
    for(var f = 0; f < FACING.length; f++) {
        if(this.isFaceCulled(x, y, z, world, FACING[f])) {
            continue;
        }
        var uMin = 0;
        var uMax = 1;
        var vMin = 0;
        var vMax = 1;
        switch(f) {
			case 2:				
				vertices.push(x + 0.5);
				vertices.push(y + 0.5);
				vertices.push(z + 0.5);
				vertices.push(uMax);
				vertices.push(vMin);
				vertices.push(this.id);
				vertices.push(f);
				vertices.push(this.getWaveAmount(uMax, vMin));

				vertices.push(x - 0.5);
				vertices.push(y + 0.5);
				vertices.push(z - 0.5);
				vertices.push(uMin);
				vertices.push(vMax);
				vertices.push(this.id);
				vertices.push(f);
				vertices.push(this.getWaveAmount(uMin, vMax));

				vertices.push(x - 0.5);
				vertices.push(y + 0.5);
				vertices.push(z + 0.5);
				vertices.push(uMin);
				vertices.push(vMin);
				vertices.push(this.id);
				vertices.push(f);
				vertices.push(this.getWaveAmount(uMin, vMin));

				vertices.push(x + 0.5);
				vertices.push(y + 0.5);
				vertices.push(z + 0.5);
				vertices.push(uMax);
				vertices.push(vMin);
				vertices.push(this.id);
				vertices.push(f);
				vertices.push(this.getWaveAmount(uMax, vMin));

				vertices.push(x + 0.5);
				vertices.push(y + 0.5);
				vertices.push(z - 0.5);
				vertices.push(uMax);
				vertices.push(vMax);
				vertices.push(this.id);
				vertices.push(f);
				vertices.push(this.getWaveAmount(uMax, vMax));

				vertices.push(x - 0.5);
				vertices.push(y + 0.5);
				vertices.push(z - 0.5);
				vertices.push(uMin);
				vertices.push(vMax);
				vertices.push(this.id);
				vertices.push(f);
				vertices.push(this.getWaveAmount(uMin, vMax));
				break;
			case 3:
				vertices.push(x - 0.5);
				vertices.push(y - 0.5);
				vertices.push(z + 0.5);
				vertices.push(uMin);
				vertices.push(vMin);
				vertices.push(this.id);
				vertices.push(f);
				vertices.push(this.getWaveAmount(uMin, vMin));

				vertices.push(x - 0.5);
				vertices.push(y - 0.5);
				vertices.push(z - 0.5);
				vertices.push(uMin);
				vertices.push(vMax);
				vertices.push(this.id);
				vertices.push(f);
				vertices.push(this.getWaveAmount(uMin, vMax));

				vertices.push(x + 0.5);
				vertices.push(y - 0.5);
				vertices.push(z + 0.5);
				vertices.push(uMax);
				vertices.push(vMin);
				vertices.push(this.id);
				vertices.push(f);
				vertices.push(this.getWaveAmount(uMax, vMin));

				vertices.push(x - 0.5);
				vertices.push(y - 0.5);
				vertices.push(z - 0.5);
				vertices.push(uMin);
				vertices.push(vMax);
				vertices.push(this.id);
				vertices.push(f);
				vertices.push(this.getWaveAmount(uMin, vMax));

				vertices.push(x + 0.5);
				vertices.push(y - 0.5);
				vertices.push(z - 0.5);
				vertices.push(uMax);
				vertices.push(vMax);
				vertices.push(this.id);
				vertices.push(f);
				vertices.push(this.getWaveAmount(uMax, vMax));

				vertices.push(x + 0.5);
				vertices.push(y - 0.5);
				vertices.push(z + 0.5);
				vertices.push(uMax);
				vertices.push(vMin);
				vertices.push(this.id);
				vertices.push(f);
				vertices.push(this.getWaveAmount(uMax, vMin));
				break;
			case 1:
				vertices.push(x - 0.5);
				vertices.push(y + 0.5);
				vertices.push(z - 0.5);
				vertices.push(uMin);
				vertices.push(vMin);
				vertices.push(this.id);
				vertices.push(f);
				vertices.push(this.getWaveAmount(uMin, vMin));

				vertices.push(x - 0.5);
				vertices.push(y - 0.5);
				vertices.push(z - 0.5);
				vertices.push(uMin);
				vertices.push(vMax);
				vertices.push(this.id);
				vertices.push(f);
				vertices.push(this.getWaveAmount(uMin, vMax));

				vertices.push(x - 0.5);
				vertices.push(y - 0.5);
				vertices.push(z + 0.5);
				vertices.push(uMax);
				vertices.push(vMax);
				vertices.push(this.id);
				vertices.push(f);
				vertices.push(this.getWaveAmount(uMax, vMax));

				vertices.push(x - 0.5);
				vertices.push(y + 0.5);
				vertices.push(z - 0.5);
				vertices.push(uMin);
				vertices.push(vMin);
				vertices.push(this.id);
				vertices.push(f);
				vertices.push(this.getWaveAmount(uMin, vMin));

				vertices.push(x - 0.5);
				vertices.push(y - 0.5);
				vertices.push(z + 0.5);
				vertices.push(uMax);
				vertices.push(vMax);
				vertices.push(this.id);
				vertices.push(f);
				vertices.push(this.getWaveAmount(uMax, vMax));

				vertices.push(x - 0.5);
				vertices.push(y + 0.5);
				vertices.push(z + 0.5);
				vertices.push(uMax);
				vertices.push(vMin);
				vertices.push(this.id);
				vertices.push(f);
				vertices.push(this.getWaveAmount(uMax, vMin));
				break;
			case 0:
				vertices.push(x + 0.5);
				vertices.push(y - 0.5);
				vertices.push(z + 0.5);
				vertices.push(uMax);
				vertices.push(vMax);
				vertices.push(this.id);
				vertices.push(f);
				vertices.push(this.getWaveAmount(uMax, vMax));

				vertices.push(x + 0.5);
				vertices.push(y - 0.5);
				vertices.push(z - 0.5);
				vertices.push(uMin);
				vertices.push(vMax);
				vertices.push(this.id);
				vertices.push(f);
				vertices.push(this.getWaveAmount(uMin, vMax));

				vertices.push(x + 0.5);
				vertices.push(y + 0.5);
				vertices.push(z - 0.5);
				vertices.push(uMin);
				vertices.push(vMin);
				vertices.push(this.id);
				vertices.push(f);
				vertices.push(this.getWaveAmount(uMin, vMin));

				vertices.push(x + 0.5);
				vertices.push(y + 0.5);
				vertices.push(z + 0.5);
				vertices.push(uMax);
				vertices.push(vMin);
				vertices.push(this.id);
				vertices.push(f);
				vertices.push(this.getWaveAmount(uMax, vMin));

				vertices.push(x + 0.5);
				vertices.push(y - 0.5);
				vertices.push(z + 0.5);
				vertices.push(uMax);
				vertices.push(vMax);
				vertices.push(this.id);
				vertices.push(f);
				vertices.push(this.getWaveAmount(uMax, vMax));

				vertices.push(x + 0.5);
				vertices.push(y + 0.5);
				vertices.push(z - 0.5);
				vertices.push(uMin);
				vertices.push(vMin);
				vertices.push(this.id);
				vertices.push(f);
				vertices.push(this.getWaveAmount(uMin, vMin));
				break;
			case 4:
				vertices.push(x - 0.5);
				vertices.push(y + 0.5);
				vertices.push(z + 0.5);
				vertices.push(uMin);
				vertices.push(vMin);
				vertices.push(this.id);
				vertices.push(f);
				vertices.push(this.getWaveAmount(uMin, vMin));

				vertices.push(x - 0.5);
				vertices.push(y - 0.5);
				vertices.push(z + 0.5);
				vertices.push(uMin);
				vertices.push(vMax);
				vertices.push(this.id);
				vertices.push(f);
				vertices.push(this.getWaveAmount(uMin, vMax));

				vertices.push(x + 0.5);
				vertices.push(y + 0.5);
				vertices.push(z + 0.5);
				vertices.push(uMax);
				vertices.push(vMin);
				vertices.push(this.id);
				vertices.push(f);
				vertices.push(this.getWaveAmount(uMax, vMin));

				vertices.push(x - 0.5);
				vertices.push(y - 0.5);
				vertices.push(z + 0.5);
				vertices.push(uMin);
				vertices.push(vMax);
				vertices.push(this.id);
				vertices.push(f);
				vertices.push(this.getWaveAmount(uMin, vMax));

				vertices.push(x + 0.5);
				vertices.push(y - 0.5);
				vertices.push(z + 0.5);
				vertices.push(uMax);
				vertices.push(vMax);
				vertices.push(this.id);
				vertices.push(f);
				vertices.push(this.getWaveAmount(uMax, vMax));

				vertices.push(x + 0.5);
				vertices.push(y + 0.5);
				vertices.push(z + 0.5);
				vertices.push(uMax);
				vertices.push(vMin);
				vertices.push(this.id);
				vertices.push(f);
				vertices.push(this.getWaveAmount(uMax, vMin));
				break;
			case 5:
				vertices.push(x + 0.5);
				vertices.push(y + 0.5);
				vertices.push(z - 0.5);
				vertices.push(uMax);
				vertices.push(vMin);
				vertices.push(this.id);
				vertices.push(f);
				vertices.push(this.getWaveAmount(uMax, vMin));

				vertices.push(x - 0.5);
				vertices.push(y - 0.5);
				vertices.push(z - 0.5);
				vertices.push(uMin);
				vertices.push(vMax);
				vertices.push(this.id);
				vertices.push(f);
				vertices.push(this.getWaveAmount(uMin, vMax));

				vertices.push(x - 0.5);
				vertices.push(y + 0.5);
				vertices.push(z - 0.5);
				vertices.push(uMin);
				vertices.push(vMin);
				vertices.push(this.id);
				vertices.push(f);
				vertices.push(this.getWaveAmount(uMin, vMin));

				vertices.push(x + 0.5);
				vertices.push(y + 0.5);
				vertices.push(z - 0.5);
				vertices.push(uMax);
				vertices.push(vMin);
				vertices.push(this.id);
				vertices.push(f);
				vertices.push(this.getWaveAmount(uMax, vMin));

				vertices.push(x + 0.5);
				vertices.push(y - 0.5);
				vertices.push(z - 0.5);
				vertices.push(uMax);
				vertices.push(vMax);
				vertices.push(this.id);
				vertices.push(f);
				vertices.push(this.getWaveAmount(uMax, vMax));

				vertices.push(x - 0.5);
				vertices.push(y - 0.5);
				vertices.push(z - 0.5);
				vertices.push(uMin);
				vertices.push(vMax);
				vertices.push(this.id);
				vertices.push(f);
				vertices.push(this.getWaveAmount(uMin, vMax));
            break;
        default:
            break;;
        }
    }
};