
(function(MonsterId) {

    "use strict";

    MonsterId.getAvatar = function(string, element) {
        var md5 = hex_md5(string);
        var seed = parseInt(md5.substr(0, 6), 16);
        var size = 120;

        // Create seed.
        Math.seedrandom(seed);

        var widthHeight = Math.min(element.offsetWidth, element.offsetHeight);
        var canvas = document.createElement('canvas');
        canvas.width = widthHeight;
        canvas.height = widthHeight;
        if(element) {
            element.appendChild(canvas);
        }

        // Avatar random parts.
        var parts = {
            legs : availableParts.legs[Math.floor(Math.random() * availableParts.legs.length)],
            hair : availableParts.hair[Math.floor(Math.random() * availableParts.hair.length)],
            arms : availableParts.arms[Math.floor(Math.random() * availableParts.arms.length)],
            body : availableParts.body[Math.floor(Math.random() * availableParts.body.length)],
            eyes : availableParts.eyes[Math.floor(Math.random() * availableParts.eyes.length)],
            mouth: availableParts.mouth[Math.floor(Math.random() * availableParts.mouth.length)]
        };

        console.log(availableParts);
        console.log(parts);
        // Create avatar.
        var avatar = canvas.getContext('2d');

        // Choose a random color
        var randomColor = 'rgb(' +
            (Math.floor(Math.random() * 200) + 55) + ',' +
            (Math.floor(Math.random() * 200) + 55) + ',' +
            (Math.floor(Math.random() * 200) + 55)
        +')';
        console.log("color: " + randomColor);
        avatar.fillStyle   = randomColor;
        avatar.strokeStyle = randomColor;
        avatar.lineWidth   = 1;

        // Fill avatar with random parts.
        for (var iPart in parts) {
            var part = parts[iPart];
            drawPart(part, avatar);
        }
        return avatar;
    };

    var drawPart = function(part, avatar) {
        var dotSize = Math.round(avatar.canvas.width / part.length);
        console.log("dotsize: " + dotSize);
        // Iterate over lines
        for(var line in part) {
            var y = line * dotSize;
            // Iterate over columns
            for(var col in part[line]) {
                var x = col * dotSize;
                switch(part[line][col]) {
                    case 1:
                        console.log("drawrect " + x + " " + y + " " + dotSize + " " + dotSize);
                        avatar.fillRect(x, y, dotSize, dotSize);
                        break;
                    case 2:
                        console.log("clearRect " + x + " " + y + " " + dotSize + " " + dotSize);
                        avatar.clearRect(x, y, dotSize, dotSize);
                        break;
                }
            }
        }
    };

    var availableParts = {
        legs:
            [
                // One part
                [
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,1,0,0,0,0,1,0,0,0],
                    [0,0,0,1,0,0,0,0,1,0,0,0],
                    [0,0,1,1,0,0,0,0,1,1,0,0]
                ]
            ],
        hair:
            [
                // One part
                [
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,1,1,0,0,1,1,0,0,0],
                    [0,0,0,0,1,1,1,1,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0]
                ]
            ],
        arms:
            [
                // One part
                [
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,1,1,0,0,0,0,1,1,0,0],
                    [0,0,1,0,0,0,0,0,0,1,0,0],
                    [1,1,1,0,0,0,0,0,0,1,1,1],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0]
                ]
            ],
        body:
            [
                // One part
                [
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,1,1,1,1,0,0,0,0],
                    [0,0,0,1,1,1,1,1,1,0,0,0],
                    [0,0,0,1,1,1,1,1,1,0,0,0],
                    [0,0,0,1,1,1,1,1,1,0,0,0],
                    [0,0,0,1,1,1,1,1,1,0,0,0],
                    [0,0,0,1,1,1,1,1,1,0,0,0],
                    [0,0,0,1,1,1,1,1,1,0,0,0],
                    [0,0,0,0,1,1,1,1,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0]
                ]
            ],
        eyes:
            [
                // One part
                [
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,2,0,2,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0]
                ]
            ],
        mouth:
            [
                // One part
                [
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,2,2,2,2,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0,0,0,0,0]
                ]
            ]
    };
}(window.MonsterId = window.MonsterId || {}));