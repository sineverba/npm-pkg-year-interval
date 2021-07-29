sonar:
	docker run --rm -e SONAR_HOST_URL="http://192.168.1.104:9000" -e SONAR_LOGIN="8792c29e77ae1d0be22afd9e83f2542d1b807eec" \
	-v "/home/sineverba/sviluppo/personali/npm-pkg-year-interval:/usr/src" sonarsource/sonar-scanner-cli:4.6