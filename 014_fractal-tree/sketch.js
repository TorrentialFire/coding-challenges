
var maxDepth = 12;
var initLength = 100;
var equalRatios;
var lengthRatioA;
var lengthRatioB;
var mirrorAngles;
var branchAngleA;
var branchAngleB;

var initLengthSlider;
var equalRatioChBx;
var ratioASlider;
var ratioBSlider;
var mirrorAnglesChBx;
var branchAngleASlider;
var branchAngleBSlider;

function setup() {
    createCanvas(600, 600);

        // (0, 1)
    lengthRatioA = 0.5;
    lengthRatioB = 0.77;
    equalRatios = true;

    branchAngleA = PI / 4;
    branchAngleB = PI / 5;
    mirrorAngles = false;

    createDiv();

    createP('Initial Length:');
    initLengthSlider = createSlider(10.0, height, 100.0, 0.1);

    equalRatioChBx = createCheckbox('Equal length ratios?', true);    
    createP('Length Ratio A:');
    ratioASlider = createSlider(0.0, 1.0, 0.5, 0.001);
    createP('Length Ratio B:');
    ratioBSlider = createSlider(0.0, 1.0, 0.5, 0.001);

    mirrorAnglesChBx = createCheckbox('Mirror branch angles?', true);
    createP('Branch Angle A:');
    branchAngleASlider = createSlider(0.0, 2.0 * PI, PI / 4, 0.001);
    createP('Branch Angle B:');
    branchAngleBSlider = createSlider(0.0, 2.0 * PI, PI / 4, 0.001);
    
}

function draw() {
    background(51);
    stroke(255);
    
    equalRatios = equalRatioChBx.checked();
    lengthRatioA = constrain(ratioASlider.value(), 0.001, 0.999);
    lengthRatioB = constrain(ratioBSlider.value(), 0.001, 0.999);
    initLength = constrain(initLengthSlider.value(), 10.0, height);

    mirrorAngles = mirrorAnglesChBx.checked();
    branchAngleA = branchAngleASlider.value();
    branchAngleB = branchAngleBSlider.value();
    
    translate(width/2, height);
    branch(initLength, 0);
    //line(width/2, height, width/2, height - len);
}

function branch(len, depth) {
    
    line(0, 0, 0, -len);
    if(len >= 1 && depth < maxDepth) {
        depth++;
        translate(0, -len);
        push();
        rotate(branchAngleA);
        branch(floor(len * lengthRatioA), depth);
        pop();

        push();
        rotate((mirrorAngles ? -1*(branchAngleA) : branchAngleB));
        branch(floor(len * (equalRatios ? lengthRatioA : lengthRatioB)), depth);
        pop();
    }
}