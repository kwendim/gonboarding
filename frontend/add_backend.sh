#!/bin/sh -eu
if [ -z "$REACT_APP_BACKEND" ]; then
    BACKEND_ADDRESS=undefined
else
    BACKEND_ADDRESS=$REACT_APP_BACKEND
fi
 
cat <<EOF
window.REACT_APP_BACKEND='$BACKEND_ADDRESS';
EOF