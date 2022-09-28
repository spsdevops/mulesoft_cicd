import { check, sleep } from 'k6';
import http from 'k6/http';

export const options = {
  vus: 1,
  duration: '30s',
};

export default function () {

  const res = http.get('https://mule-test-preprod-xa2mx3.5sc6y6-1.usa-e2.cloudhub.io/test');

  // Validaciones, cada validación genera un procentaje de exito.
  check(res, {
    //Validación 1
    'Hello test': (r) =>
      r.body.includes('Hello test'),
    // Validación 2
    'Hello Mule': (r) =>
      r.body.includes('Hello Mule'),
  });

  // Imprime la respuesta
  console.log(res.body);

  sleep(1);

}