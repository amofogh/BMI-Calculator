$(document).ready(function () {
  ClearInput();

  // cmt: eventlistener for use enter in inputs
  $("#Weight , #Height").on("keydown", function (e) {
    if (e.key == "Enter") {
      BMI();
    }
  });

  // Int Checker
  function BMI() {
    let Height = $("#Height").val();
    let Weight = $("#Weight").val();

    if (isNaN(Weight && Height)) {
      alert("Not A Number");
    } else if (Weight == "" || Height == "") {
      alert("Fill the Fields !");
    } else {
      GetType(Weight, Height);
    }
  }

  // cmt: get option value for kg or pound and cm or inch
  function GetType(WeighttVal, HeightVal) {
    let Weight;
    let Height;

    let typeWeight = $(".select:eq(0)").val();
    let typeHeight = $(".select:eq(1)").val();

    if (typeWeight == "Pound") {
      // convet pound to kg
      Weight = WeighttVal / 2.205;
    } else if (typeWeight == "Kg") {
      Weight = WeighttVal;
    }

    if (typeHeight == "Inch") {
      // convet Inch to cm
      Height = HeightVal * 2.54;
    } else if (typeHeight == "Cm") {
      Height = HeightVal;
    }

    BMICalculator(Weight, Height);
  }

  // cmt: get the data from Gettype and intChecker then calc BMI
  function BMICalculator(Weight, Height) {
    //BMI formula    Height to M then **2
    var Result = (Weight / (Height / 100) ** 2).toFixed(2);

    // Set WeightState by BMI
    let WeightStatus = WeightScanner(Result);

    $(".demo").text(Result);
    $(".show").text(WeightStatus);

    ClearInput();
  }

  // set WeightStatus by your BMI number
  function WeightScanner(Result) {
    let WeightStatus;

    if (Result < 18.5) {
      WeightStatus = "UnderWeight";
    } else if (Result >= 18.5 && Result < 25) {
      WeightStatus = "Normal";
    } else if (Result >= 25 && Result < 30) {
      WeightStatus = "OverWeight";
    } else if (Result >= 30 && Result < 35) {
      WeightStatus = "Obesity class I";
    } else if (Result >= 35 && Result < 40) {
      WeightStatus = "Obesity class II";
    } else if (40 < Result) {
      WeightStatus = "Obesity class III";
    }

    return WeightStatus;
  }

  function ClearInput() {
    $("#Height").val("");
    $("#Weight").val("");
  }

  $(".btn").click(BMI);

  // cmt: Picture
  $(".Chart").click(function () {
    $(this).toggleClass("openPic");
    $(".Img").toggleClass("Zoom-img");
    $(".black").toggleClass("block");
  });
});
