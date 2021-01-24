dotnet publish -c Release
docker build -t tomkeepr ./bin/Release/netcoreapp5.0/publish
docker tag tomkeepr registry.heroku.com/tomkeepr/web
docker push registry.heroku.com/tomkeepr/web
heroku container:release web -a tomkeepr
echo press any key
read end