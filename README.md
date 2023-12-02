# General
Este repositorio sigue la estrategia de ramificaciones Trunk Based Development y sigue el mismo flujo que la plantilla para proyectos Serverless en AWS.
Este repositorio no es una plantilla sino un ejemplo, se puede mejorar y generar una plantilla o arquetipo de Maven.
Este proyecto despliega a CloudHub 2.0 por lo que necesita publicar en Exchange la aplicación para desplegar, no considera otras versiones del runtime como Hybrid CloudHub 1.0 o Kubernetes, pero se puede adaptar.

# Referencias
https://ifgeekthen.nttdata.com/es/que-es-mulesoft-anypoint-y-principales-caracteristicas
https://docs.mulesoft.com/mule-runtime/latest/deploy-to-cloudhub-2
https://anypoint.mulesoft.com/exchange/portals/anypoint-platform/f1e97bc6-315a-4490-82a7-23abe036327a.anypoint-platform/exchange-maven-facade-api-http/
https://docs.mulesoft.com/cloudhub-2/ch2-deploy-maven
https://www.youtube.com/watch?v=MlGf3tmlfKI&pp=ygUnbXVsZXNvZnQgZGVwbG95IHdpdGggbWF2ZW4gY2xvdWRodWIgMi4w
https://www.youtube.com/watch?v=RkhpAeWRBTg

# Importante
- Al momento de realizar este ejercicio, Exchange no permitía republicar una aplicación con el mismo nombre por lo que se agrega el hash al nombre de la aplicación para permitir subir cambios, si se redespliega algo el pipeline devovlera el mensaje No se publico en exchange y continuará al despliegue.
- Exchange tiene un limite de cuantos artefactos puedes tener, por lo que se deberá crear un proceso programado que vaya limpiando las aplicaciones viejas que ya no se usan, a Exchange le toma varios días completar el borrado.
- Si se usa una Connected App para interactuar con la fachade de Maven para Exchange las credenciales se deben pasar así en el settings.xml:

        <server>
                <id>{repository id}</id>
                <username>~~~Client~~~</username>
                <password>{Client ID}~?~{Secret}</password>
            </server>
        </servers>

- Permisos necesarios par aun usuario o Connected App para desplegar: https://help.mulesoft.com/s/article/Minimum-permissions-and-scopes-required-for-deploying-CloudHub-2-0-applications
- Si se usa una Connected App se debe utilizar agregar el permiso Design Center Developer para que se pueda autenticar correctamente: https://docs.mulesoft.com/cloudhub-2/ch2-deploy-maven#authentication-methods

# Mejoras
- Usar un Parent POM para ayudar a estandarizar los proyectos:
  https://www.google.com/search?client=firefox-b-d&q=mulesoft+parent+pom+tutorial
  https://help.mulesoft.com/s/article/How-to-work-with-a-parent-pom
- Crear workfows reusables para no tener la etapa de build y deploy replicada por cada uno de los workflows, sino simplemente llamar al workflow reusable, como en la plantilla Serverless
