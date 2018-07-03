function World(width, height, depth) {
    this.width = width;
    this.height = height;
    this.depth = depth;

    this.blocks = new Uint8Array(width * height * depth);
    this.generate();
}

World.prototype.getBlockIndex = function(x, y, z) {
    if(x < 0 || y < 0 || z < 0 || x >= this.width || y >= this.height || z >= this.depth) {
        return -1;
    }
    var idx = (z * this.height + (y * this.width)) + x;
    if(idx < 0 || idx >= this.blocks.length) {
        return -1;
    }
    return idx;
}

World.prototype.getBlock = function(x, y, z) {
    var idx = this.getBlockIndex(x, y, z);
    if(idx < 0) {
        return -1;
    }
    return this.blocks[idx];
}

World.prototype.setBlock = function(x, y, z, block) {
    var idx = this.getBlockIndex(x, y, z);
    if(idx < 0) {
        return;
    }
    this.blocks[idx] = block;
}

World.prototype.generate = function() {
    var seaLevel = this.height / 2;
    for(var x = 0; x < this.width; x++) {
        for(var y = 0; y < this.height; y++) {
            for(var z = 0; z < this.depth; z++) {
                var idx = (z * this.height + (y * this.width)) + x;
                this.blocks[idx] = y <= seaLevel ? 1 : 0;
            }
        }
    }
};