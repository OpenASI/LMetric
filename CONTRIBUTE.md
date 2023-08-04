# https://circleci.com/blog/publishing-a-python-package/?utm_source=google&utm_medium=sem&utm_campaign=sem-google-dg--japac-en-dsa-tROAS-auth-nb&utm_term=g_-_c__dsa_&utm_content=&gclid=Cj0KCQjwzdOlBhCNARIsAPMwjbwdmJCEbsBrqMLOreMW3MpwB3Fn_goelbiBY9RaLQ_IeOJKleiSjYMaAuiZEALw_wcB

# python setup.py sdist bdist_wheel
# twine upload --repository testpypi dist/*
# pip install --index-url https://test.pypi.org/simple lmetric

# https://circleci.com/blog/deploying-documentation-to-github-pages-with-continuous-integration/
# sphinx-quickstart docs/ --project 'lmetric' --author 'zhangzn710@gmail.com'
# Sphinx:
# . https://towardsdatascience.com/documenting-python-code-with-sphinx-554e1d6c4f6d
#   conf.py
#       import os
#       import sys
#       sys.path.insert(0, os.path.abspath('..'))

#       extensions = [
#       'sphinx.ext.autodoc',
#       'sphinx.ext.viewcode',
#       'sphinx.ext.napoleon'
#   ]

#  html_theme = 'sphinx_rtd_theme'

# . https://eikonomega.medium.com/getting-started-with-sphinx-autodoc-part-1-2cebbbca5365
# .   sphinx-apidoc -o docs lmetric/
#   include the generated modules.rst file in your index.rst


# every time we change version:
# 1. CHANGELOG.md
# 2. .circleci/config.ml: pip install dist/lmetric-x.x.x-py3-none.any.whl
# 3. setup.py VERSION='x.x.x'
# 4. docs/conf.py release='x.x.x'
# 4. sphinx-apidoc -o docs lmetric/
