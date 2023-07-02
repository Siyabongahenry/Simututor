export const convertToCurvePath =(points={x1:0,y1:0,x2:0,y2:0,x3:0,y3:0,x4:0,y4:0})=>{

    let pointsToString = "M"+points.x1+" "+points.y1
                  +"C"+points.x2+" "+points.y2
                  +" "+points.x3+" "+points.y3
                  +" "+points.x4+" "+points.y4;

    return pointsToString ;
}