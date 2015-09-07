int myCompare(int  x, int y)
{
      string X = to_string(x),Y=to_string(y);
    string XY = X.append(Y);
 
   
    string YX = Y.append(X);
 //cout<<"hi";
   
    return XY.compare(YX) > 0 ? 1: 0;
}


string Solution::largestNumber(const vector<int> &B) {
    // Do not write main() function.
    // Do not read input, instead use the arguments to the function.
    // Do not print the output, instead return values as specified
    // Still have a doubt. Checkout www.interviewbit.com/pages/sample_codes/ for more details
    int i=0;
    vector<int> A(B.size());
    
    while(i<A.size()){A[i] = B[i]; i++; }
    
    sort(A.begin(),A.end(),myCompare);
    
    i=0;
    
    string s,temp;
    // cout<<to_string(A[0]);
    //cout<<temp;
    while(i < A.size() ){ 
        s.insert(i,to_string(A[i])); cout<<s[i]; i++;
        
    }
    return s;
 
  
    
}
 
