Contents/Resources/Main.css: Main.scss
	sass $< $@

install: Contents/Resources/Main.css
	open .

.PHONY: install
