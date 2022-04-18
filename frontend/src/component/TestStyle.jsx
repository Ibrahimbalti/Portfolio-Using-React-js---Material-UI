export const styles = (theme) => ({
    test:{
        backgroundColor:"blue",
        [theme.breakpoints.down('xs')]: {
            backgroundColor: 'red',
          },
    }
  });