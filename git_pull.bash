OBJECT="$(git ls-remote origin -h refs/heads/master)"
while sleep 1
do
CURRENT="$(git ls-remote origin -h refs/heads/master)"
if [ "$OBJECT" != "$CURRENT" ];
then
	git pull origin master
	OBJECT=$CURRENT	
fi
done
