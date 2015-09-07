#include<iostream>
using namespace std;
int main()
{

  int start[2];

  cout<<"ENTER THE INTIAL CO-ORDINATE OF CURSOR/POINTER OF MACHINE(x,y) "<<endl<<endl;

  cin>>start[0]>>start[1];

  int n,m,num,i=0,j=0;
  

  int Case;
  int step;
   cout<<"ENTER THE ROWS AND COLUMN AND NO OF TIMES TO TRAVEL"<<endl<<endl;
  cin>>n>>m>>num;
char matrix[n][m];

  for(i=0;i<n;i++)
    		{for(j=0;j<m;j++)matrix[i][j] = ' ';}

   cout<<"ENTER 1 ,2,3,4,5,6,7,8,9 FOR LEFT,LEFT_UP,UP,UP_RIGHT,RIGHT,RIGHT_DOWN,DOWN,DOWN_LEFT,CLEAR simultaneously Direction"<<endl<<endl;
   cout<<"ENTER ALSO THE NOF OF  STEPS TO CERTAIN DIRECTION SPECIFIED BY (1,2,3...)"<<endl<<endl;

  while(num--){
    cin>>Case>>step;;
    if(Case == 1){ start[1]-=step;;matrix[start[0]][start[1]] = 'x';}

    if(Case == 2){ start[0]-=step; start[1]-=step; matrix[start[0]][start[1]] = 'x';}

    if(Case == 3){ start[0]-=step; matrix[start[0]][start[1]] = 'x';}

    if(Case == 4){ start[0]-=step;start[1]+=step; matrix[start[0]][start[1]] = 'x';}

    if(Case == 5){ start[1]+=step;matrix[start[0]][start[1]] = 'x';}

    if(Case == 6){ start[1]+=step;start[0]+=step;matrix[start[0]][start[1]] = 'x';}

    if(Case == 7){ start[1];start[0]+=step;matrix[start[0]][start[1]] = 'x';}

    if(Case == 8){ start[0]+=step;start[1]-=step;matrix[start[0]][start[1]] = 'x';}

    if(Case == 9){
    	for(i=0;i<n;i++)
    		{for(j=0;j<m;j++)matrix[i][j] = ' ';}

    }

  

  }

for(i=0;i<n;i++){
    		for(j=0;j<m;j++)
                 cout<<matrix[i][j] ;
  cout<<endl;
}
	return 0;
}
