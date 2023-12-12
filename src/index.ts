type WathedParameter = {
  methodName: string;
  parameterIndex: number;
};

const watchedParameters: WathedParameter[] = [];

function Watch(_target: any, methodName: string, parameterIndex: number) {
  watchedParameters.push({ methodName, parameterIndex });
}

class Vehicle {
  move(@Watch _speed: number) {}
}

console.log(watchedParameters);
