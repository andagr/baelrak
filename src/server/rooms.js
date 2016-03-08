'use strict';

function move(layout, pos, dir) {
    let newPos;
    switch (dir) {
        case 'n':
            return layout[pos.x][pos.y-1] == 0 ? {x: pos.x, y: pos.y-1} : pos;
        case 'ne':
            return layout[pos.x+1][pos.y-1] == 0 ? {x: pos.x+1, y: pos.y-1} : pos;
        case 'e':
            return layout[pos.x+1][pos.y] == 0 ? {x: pos.x+1, y: pos.y} : pos;
        case 'se':
            return layout[pos.x+1][pos.y+1] == 0 ? {x: pos.x+1, y: pos.y+1} : pos;
        case 's':
            return layout[pos.x][pos.y+1] == 0 ? {x: pos.x, y: pos.y+1} : pos;
        case 'sw':
            return layout[pos.x-1][pos.y+1] == 0 ? {x: pos.x-1, y: pos.y+1} : pos;
        case 'w':
            return layout[pos.x-1][pos.y] == 0 ? {x: pos.x-1, y: pos.y} : pos;
        case 'nw':
            return layout[pos.x-1][pos.y-1] == 0 ? {x: pos.x-1, y: pos.y-1} : pos;
        default:
            return pos;
    }
}

let roomZero = {
    id: 0,
    layout: [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
};
roomZero.move = function(pos, dir) {
    return move(roomZero.layout, pos, dir);
}

let rooms = [roomZero];

module.exports = function(id) {
    return rooms.find((r) => {
        return r.id == id;
    });
};
