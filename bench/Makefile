all: build

files := index no-jsx

build:
	$(foreach file, $(files), FILE=$(file) webpack --config wp.babel.js -p;)
