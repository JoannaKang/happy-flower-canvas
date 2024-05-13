function drawFlower(size) {
  const canvas = document.getElementById("canvas");
  canvas.width = 250 * (1 + size * 0.1);
  canvas.height = 250 * (1 + size * 0.1);
  const ctx = canvas.getContext("2d");
  const radius = canvas.width * 0.15;
  const scaleFactor = radius / 70;
  ctx.lineWidth = 5 * scaleFactor;

  // define canvas size
  const c = [canvas.width / 2, canvas.height / 2];
  // size of flower

  // flower petals
  const colors = [
    "#EE579F",
    "#F05841",
    "#F78F43",
    "#FCBD4F",
    "#FAEF56",
    "#A2D164",
    "#22B069",
    "#05B6AE",
    "#2BB7E9",
    "#2386C9",
    "#5250A2",
    "#A155A1",
  ];

  const sin30 = Math.sin(degToRad(30));
  const sin75 = Math.sin(degToRad(75));
  const halfCircleR = (radius * sin30) / sin75;

  function degToRad(angle) {
    return (2 * Math.PI * angle) / 360;
  }

  for (let i = 0; i < 12; i++) {
    const x = 0;
    const y = -radius * 2;
    const p0 = rotateVector([x, y], 30 * i - 15);
    const arcCentre = rotateVector([x, y], 30 * i);
    const p1 = rotateVector([x, y], 30 * (i + 1) - 15);
    p0[0] += c[0];
    p0[1] += c[1];
    p1[0] += c[0];
    p1[1] += c[1];
    arcCentre[0] += c[0];
    arcCentre[1] += c[1];
    // Start a new path for the circle
    ctx.beginPath();
    ctx.arc(arcCentre[0], arcCentre[1], halfCircleR, 0, 2 * Math.PI);
    // Fill the circle
    ctx.lineWidth = 2.5 * scaleFactor;
    ctx.fillStyle = colors[i];
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.lineWidth = 3 * scaleFactor;
    ctx.beginPath();
    ctx.moveTo(p0[0], p0[1]);
    ctx.lineTo(c[0], c[1]);
    ctx.lineTo(p1[0], p1[1]);
    ctx.fillStyle = colors[i];
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }

  function rotateVector(vector, angleDegrees) {
    const x = vector[0];
    const y = vector[1];
    const angleRadians = (2 * Math.PI * angleDegrees) / 360;
    const cosTheta = Math.cos(angleRadians);
    const sinTheta = Math.sin(angleRadians);
    return [x * cosTheta - y * sinTheta, x * sinTheta + y * cosTheta];
  }

  // Face
  ctx.beginPath();
  ctx.arc(c[0], c[1], radius, 0, 2 * Math.PI);
  ctx.fillStyle = "#FAEF24";
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  // Mouth
  ctx.beginPath();
  ctx.lineWidth = 5 * scaleFactor;
  const upperMouthCurve = 0.3;
  const lowerMouthCurveX = 0.4;
  const lowerMouthCurveY = 0.9;
  const leftCorner = [c[0] - 0.7 * radius, c[1] - 0.1 * radius];
  const rightCorner = [c[0] + 0.7 * radius, c[1] - 0.1 * radius];
  const upperMouthPoint1 = [
    c[0] - upperMouthCurve * radius,
    c[1] - upperMouthCurve * radius,
  ];
  const upperMouthPoint2 = [
    c[0] + upperMouthCurve * radius,
    c[1] - upperMouthCurve * radius,
  ];
  const lowerMouthCurve1 = [
    c[0] - lowerMouthCurveX * radius,
    c[1] + lowerMouthCurveY * radius,
  ];
  const lowerMouthCurve2 = [
    c[0] + lowerMouthCurveX * radius,
    c[1] + lowerMouthCurveY * radius,
  ];
  ctx.moveTo(leftCorner[0], leftCorner[1]);
  ctx.bezierCurveTo(
    upperMouthPoint1[0],
    upperMouthPoint1[1],
    upperMouthPoint2[0],
    upperMouthPoint1[1],
    rightCorner[0],
    rightCorner[1]
  );
  ctx.bezierCurveTo(
    lowerMouthCurve2[0],
    lowerMouthCurve2[1],
    lowerMouthCurve1[0],
    lowerMouthCurve1[1],
    leftCorner[0],
    leftCorner[1]
  );
  ctx.bezierCurveTo(
    upperMouthPoint1[0],
    upperMouthPoint1[1],
    upperMouthPoint2[0],
    upperMouthPoint1[1],
    rightCorner[0],
    rightCorner[1]
  );
  ctx.stroke();
  ctx.fillStyle = "#ED2025";
  ctx.fill();
  ctx.closePath();

  // left eyes
  const eyePosition = [c[0], c[1]];
  ctx.beginPath();
  ctx.ellipse(
    eyePosition[0] - 0.4 * radius,
    eyePosition[1] - 0.5 * radius,
    6 * scaleFactor,
    10 * scaleFactor,
    Math.PI / 5,
    0,
    2 * Math.PI
  );
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.ellipse(
    eyePosition[0] - 0.37 * radius,
    eyePosition[1] - 0.55 * radius,
    3 * scaleFactor,
    4.5 * scaleFactor,
    Math.PI / 6.5,
    0,
    2 * Math.PI
  );

  ctx.fillStyle = "#FFFFFF";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.ellipse(
    eyePosition[0] - 0.45 * radius,
    eyePosition[1] - 0.45 * radius,
    1.8 * scaleFactor,
    2.6 * scaleFactor,
    Math.PI / 6.5,
    0,
    2 * Math.PI
  );

  ctx.fillStyle = "#FFFFFF";
  ctx.fill();
  ctx.closePath();

  // right eyes
  const rightEye = [c[0], c[1]];
  ctx.beginPath();
  ctx.ellipse(
    eyePosition[0] + 0.4 * radius,
    eyePosition[1] - 0.5 * radius,
    6 * scaleFactor,
    10 * scaleFactor,
    -Math.PI / 5,
    0,
    2 * Math.PI
  );
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.ellipse(
    eyePosition[0] + 0.37 * radius,
    eyePosition[1] - 0.55 * radius,
    3 * scaleFactor,
    4.5 * scaleFactor,
    -Math.PI / 6.5,
    0,
    2 * Math.PI
  );

  ctx.fillStyle = "#FFFFFF";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.ellipse(
    eyePosition[0] + 0.45 * radius,
    eyePosition[1] - 0.45 * radius,
    1.8 * scaleFactor,
    2.6 * scaleFactor,
    -Math.PI / 6.5,
    0,
    2 * Math.PI
  );

  ctx.fillStyle = "#FFFFFF";
  ctx.fill();
  ctx.closePath();

  // Draw the ellipse's line of reflection
  ctx.beginPath();
  ctx.moveTo(0, 200);
  ctx.lineTo(200, 0);
}

export default drawFlower;
