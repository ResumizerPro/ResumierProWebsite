while sleep 1
do
  if [[ `git status --porcelain` ]]; then
    echo "abcd"
  else
    git pull origin master
  fi
done
