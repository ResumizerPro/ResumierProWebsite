while inotifywait -r -e close_write "../ResumizerProWebsite/"
do
 eval "sudo node server"
 echo "Server Restarted"
done
