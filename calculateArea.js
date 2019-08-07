const calculateRectangleArea = function (length, width){
    if (length <= 0 || width <= 0){
        return undefined;
    }
    return length * width;
}

const calculateTriangleArea = function (base, height){
    if (base <= 0 || height <= 0){
        return undefined;
    }
    return base * height / 2;
}

const calculateCircleArea = function (radius){
    if (radius <= 0){
        return undefined;
    }
    return Math.PI * radius * radius;
}