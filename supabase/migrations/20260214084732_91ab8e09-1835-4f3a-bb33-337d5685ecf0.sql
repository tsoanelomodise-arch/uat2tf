
-- Drop the existing overly broad SELECT policy
DROP POLICY IF EXISTS "Users can read own roles" ON public.user_roles;

-- Recreate with explicit authenticated role restriction
CREATE POLICY "Users can read own roles"
ON public.user_roles
AS RESTRICTIVE
FOR SELECT
TO authenticated
USING (user_id = auth.uid());
