
-- Fix: must be PERMISSIVE so it grants access (RESTRICTIVE only restricts, doesn't grant)
DROP POLICY IF EXISTS "Users can read own roles" ON public.user_roles;

CREATE POLICY "Users can read own roles"
ON public.user_roles
AS PERMISSIVE
FOR SELECT
TO authenticated
USING (user_id = auth.uid());
