cd docs/sec-a
for i in *.md; do pandoc "$i" -o ../../static/"$i".pdf; done

cd ../sec-b
for i in *.md; do pandoc "$i" -o ../../static/"$i".pdf; done